package com.example.webapp_02_sp04.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.webapp_02_sp04.entity.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

   // 最も古いレコードを取得するクエリ
   Item findFirstByOrderByCreatedAtAsc();

   // 最も新しいレコードを取得するクエリ
   Item findFirstByOrderByCreatedAtDesc();
}

