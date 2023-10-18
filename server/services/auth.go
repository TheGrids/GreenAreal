package services

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"greenareal.ru/m/v2/models"
	"net/http"
	"os"
	"time"
)

func SignUp(c *gin.Context) {
	var input models.User

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"msg": err.Error()})
		return
	}

	hash, err := hashing(input.Password)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"msg": "Ошибка сервера."})
		return
	}
	input.Password = hash

	if err := models.DB.Where("email=?", input.Email).First(&input).Error; err == nil {
		c.JSON(http.StatusConflict, gin.H{"msg": "Электронная почта уже занята"})
		return
	}

	models.DB.Create(&input)

	c.JSON(http.StatusOK, gin.H{"msg": "Мы отправили письмо с подтверждением на вашу электронную почту. Вы сможете зайти на аккант только после подтверждения."})
}

func SignIn(c *gin.Context) {
	var input models.SignIn
	var user models.User

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"msg": err.Error()})
		return
	}

	if err := models.DB.Where("email=?", input.Email).First(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"msg": "Неверная почта или пароль."})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"msg": "Неверная почта или пароль."})
		return
	}

	secure := true
	if os.Getenv("COOKIE_SECURE") == "false" {
		secure = false
	}

	c.SetCookie("refresh_token", createToken(user, 60*24*30), 60*60*24*30, "/api/auth", os.Getenv("COOKIE_DOMAIN"), secure, true) // if https: secure = true
	c.JSON(http.StatusOK, gin.H{"msg": "Успешно"})
}

func hashing(pass string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(pass), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(hash), err
}

// CreateToken Создание JWT
func createToken(user models.User, minutes int) string {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userid": user.ID,
		"email":  user.Email,
		"exp":    time.Now().Add(time.Minute * time.Duration(minutes)).Unix(),
	})

	jwtToken, _ := token.SignedString([]byte(os.Getenv("JWT_SECRET")))
	return jwtToken
}
