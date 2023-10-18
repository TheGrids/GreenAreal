package main

import (
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"greenareal.ru/m/v2/models"
	"greenareal.ru/m/v2/services"
	"time"
)

func main() {
	r := gin.Default()

	models.ConnectionDataBase()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173", "https://greenareal.ru", "http://127.0.0.1:5173"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowCredentials: true,
		MaxAge:           1 * time.Minute,
	}))

	api := r.Group("/api")
	{
		api.Static("/image", "./image")
		api.GET("/new_products", services.GetNewProducts)
		api.GET("/popular_products", services.GetPopularProducts)
		api.GET("/all", services.GetAllProducts)
		api.GET("/products", services.SearchProducts)
		api.GET("/product/:id", services.Product)
		auth := api.Group("/auth")
		{
			auth.POST("/signup", services.SignUp)
			auth.POST("/signin", services.SignIn)
		}

		api.GET("/cookie", func(c *gin.Context) {

			cookie, err := c.Cookie("gin_cookie")

			if err != nil {
				cookie = "NotSet"
				c.SetCookie("gin_cookie", "test", 3600, "/", "localhost", false, true)
			}

			fmt.Printf("Cookie value: %s \n", cookie)
		})
	}

	r.Run()
}
