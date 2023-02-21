package services

import (
	"github.com/gin-gonic/gin"
	"greenareal.ru/m/v2/models"
	"net/http"
)

type a struct {
	ID   uint
	Name string
}

func GetNewProducts(c *gin.Context) {
	var products []models.Product

	models.DB.Order("created_at DESC, name DESC").Find(&products)

	c.JSON(http.StatusOK, products)
}
