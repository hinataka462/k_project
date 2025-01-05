package com.example.webapp_02_sp04.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.webapp_02_sp04.entity.Item;
import com.example.webapp_02_sp04.repository.ItemRepository;
import com.example.webapp_02_sp04.service.ItemService;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:8081")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ItemService ItemService;

    @GetMapping
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @PostMapping
    @Transactional
    public ResponseEntity<String> createItem(@RequestBody Item item) {
        try {
            String message = ItemService.addItem(item);
            return ResponseEntity.ok(message);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating item");
        }
    }

    @DeleteMapping("/{id}")
    @Transactional
   public ResponseEntity<String> deleteItem(@PathVariable Long id) {
       try {
           ItemService.deleteItem(id);
           return ResponseEntity.ok("アイテムが正常に削除されました");
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("アイテムの削除に失敗しました");
       }
   }
}