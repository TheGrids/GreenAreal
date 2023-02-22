package services

import (
	"github.com/gin-gonic/gin"
	"greenareal.ru/m/v2/models"
	"net/http"
)

func Product(c *gin.Context) {
	var product models.Product

	if err := models.DB.Where("id=?", c.Param("id")).First(&product).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "404 Not Found"})
		return
	}
	c.JSON(http.StatusOK, product)
}
