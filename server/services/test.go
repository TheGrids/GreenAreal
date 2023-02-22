package services

import (
	"github.com/gin-gonic/gin"
	"greenareal.ru/m/v2/models"
	"net/http"
)

func SearchProducts(c *gin.Context) {
	var products []models.Product
	query := c.Query("q") // Получаем параметр поиска из параметров запроса
	// Формируем запрос на поиск товаров по переданному параметру
	if query != "" {
		models.DB.Where("LOWER(name) LIKE LOWER(?)", "%"+query+"%").Find(&products)
	}

	c.JSON(http.StatusOK, products) // Отправляем найденные товары в качестве ответа
}
