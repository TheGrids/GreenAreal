package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name   string
	Email  string
	Orders []Order
}

type Product struct {
	gorm.Model
	Name        string
	Price       uint
	Category    string
	Description string
	Orders      []Order
}

type Order struct {
	gorm.Model
	UserID    uint
	ProductID uint
	Quantity  int
	User      User
	Product   Product
}
