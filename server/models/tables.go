package models

import (
	"time"
)

type User struct {
	ID        uint       `gorm:"primary_key" json:"id"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	DeletedAt *time.Time `json:"deleted_at"`
	Name      string     `json:"name" binding:"required"`
	Email     string     `json:"email" binding:"required"`
	Orders    []Order    `json:"orders"`
}

type Product struct {
	ID          uint       `gorm:"primary_key" json:"id"`
	CreatedAt   time.Time  `json:"created_at"`
	UpdatedAt   time.Time  `json:"updated_at"`
	DeletedAt   *time.Time `json:"deleted_at"`
	Name        string     `json:"name" binding:"required"`
	Price       uint       `json:"price" binding:"required"`
	Category    string     `json:"category" binding:"required"`
	Description string     `json:"description" binding:"required"`
	Image       string     `json:"image" binding:"required"`
	Bought      uint       `json:"bought" gorm:"default:0"`
	Orders      []Order    `json:"orders"`
}

type Order struct {
	ID        uint       `gorm:"primary_key" json:"id"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	DeletedAt *time.Time `json:"deleted_at"`
	UserID    uint       `json:"userID" binding:"required"`
	ProductID uint       `json:"productID" binding:"required"`
	Quantity  int        `json:"quantity" binding:"required"`
	User      User       `json:"user"`
	Product   Product    `json:"product"`
}
