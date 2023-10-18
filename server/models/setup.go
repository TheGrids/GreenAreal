package models

import (
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"os"
)

var DB *gorm.DB

// ConnectionDataBase Подключение к БД
func ConnectionDataBase() {
	// Проверка .env файла
	err := godotenv.Load()
	if err != nil {
		return
	}
	dsn, exist := os.LookupEnv("POSTGRES_CONNECT")
	if !exist {
		log.Printf("Error loading .env file")
	}

	// Подключение к БД
	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	// Автомиграция таблиц в БД
	err = database.AutoMigrate(&User{}, &Product{}, &Order{})
	if err != nil {
		return
	}

	DB = database
}
