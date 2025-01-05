package com.example.webapp_02_sp04.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.webapp_02_sp04.entity.Item;
import com.example.webapp_02_sp04.repository.ItemRepository;

import jakarta.transaction.Transactional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

   private static final int MAX_RECORDS = 5;

   private final Object lock = new Object(); // 排他制御用のロック

   public List<Item> getAllItems() {
        return itemRepository.findAll();
   }

   @Transactional
   public String addItem(Item item) {
    synchronized (lock) {
        // 新しいアイテムを保存
       itemRepository.save(item);

       // レコード数を確認
       long count = itemRepository.count();

       // もし100を超えたら一番古いレコードを削除
       if (count > MAX_RECORDS) {
           Item oldestItem = itemRepository.findFirstByOrderByCreatedAtAsc();
           if (oldestItem != null) {
               itemRepository.delete(oldestItem);
           }
           return "交換履歴の表示は100個までです";
       }

       return "アイテムが正常に追加されました";
    }
    }     
    
    @Transactional
   public void deleteItem(Long id) {
       synchronized (lock) {
           itemRepository.deleteById(id);
       }
   }
}
