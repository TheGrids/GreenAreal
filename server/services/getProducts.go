package services

import (
	"github.com/gin-gonic/gin"
	"greenareal.ru/m/v2/models"
	"net/http"
)

// GetNewProducts Новые товары
func GetNewProducts(c *gin.Context) {
	var products []models.Product

	// Поиск товаров в БД с сортировкой по дате создания
	models.DB.Order("created_at DESC, name DESC").Limit(4).Find(&products)

	c.JSON(http.StatusOK, products)
}

// GetPopularProducts Популярные товары
func GetPopularProducts(c *gin.Context) {
	var products []models.Product

	// Поиск товаров в БД с сортировкой по количеству покупок
	models.DB.Where("bought <> ?", 0).Order("bought DESC, created_at DESC").Limit(4).Find(&products)

	c.JSON(http.StatusOK, products)
}

// GetAllProducts Все товары
func GetAllProducts(c *gin.Context) {
	var products []models.Product

	// Получить все товары из БД
	models.DB.Find(&products)

	c.JSON(http.StatusOK, products)
}
