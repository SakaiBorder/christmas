package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir(".")))
	log.Println("serving at 3000")
	http.ListenAndServe(":3000", nil)
}
