<template>
  <div class="container">
    <h1 class="title">わらしべ長者</h1>
    <!-- サーバーからのメッセージを表示 -->
   <transition name="fade">
     <div v-if="serverMessage" class="message">
       {{ serverMessage }}
     </div>
   </transition>
    <transition name="highlight">
      <!-- アニメーションの動きを元の位置のまま実行 -->
      <div v-if="newestItem" key="newestItem" class="newest-item-card">
        <h2>現在のアイテム</h2>
        <p>
          {{ newestItem.name }} - {{ newestItem.amount }}
          <span> ({{ formatDate(newestItem.createdAt) }}) </span>
        </p>
      </div>
    </transition>
    <form @submit.prevent="addItem" class="form">
      <input v-model="newItem.name" placeholder="名前を書いてね" class="input" required />
      <input
      v-model="newItem.amount"
      placeholder="金額を書いてね"
      class="input"
      required
      @input="validateNumericInput"
      />
      <!-- <p v-if="emailError" class="error-message">{{ emailError }}</p> -->
      <button type="submit" class="button">交換する</button>
    </form>
    <h4>金額は現在のアイテムの±10%以内にしてね</h4>
    <h2 class="subtitle">いままで交換されたもの</h2>
    <ul class="item-list">
      <transition-group name="fade" tag="div">
        <li v-for="item in reversedItems" :key="item.id" class="item-card">
          <span>{{ item.name }} - {{ item.amount }}</span>
          <span> ({{ formatDate(item.createdAt) }}) </span>
          <button @click="confirmDelete(item.id)" class="delete-button">削除</button>
        </li>
      </transition-group>
    </ul>
    <!-- ポップアップ表示 -->
    <div v-if="valueError" class="popup">
      <div class="popup-content">
        <span class="popup-close" @click="closePopup">&times;</span>
       <p>{{ valueError }}</p>
      </div>
    </div>
    <!-- 確認ダイアログ -->
    <div v-if="confirmDeleteDialogVisible" class="popup">
      <div class="popup-content">
        <p>本当にこのアイテムを削除しますか？</p>
        <div class="dialog-actions">
          <button @click="deleteItem(confirmedItemId)" class="button">はい</button>
          <button @click="closeDeleteDialog" class="button cancel-button">いいえ</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ItemService from "../services/ItemService";

export default {
  data() {
    return {
      Items: [],
      newItem: { name: "", amount: "" },
      newestItem: null,
      serverMessage: null,
      valueError: null,
      confirmDeleteDialogVisible: false, // 確認ダイアログの表示フラグ
      confirmedItemId: null, // 削除対象のアイテムID
    };
  },
  computed: {
    reversedItems() {
      return [...this.Items].reverse();
    },
  },
  methods: {
    fetchItems() {
      ItemService.getItems().then((response) => {
        this.Items = response.data;
        this.newestItem = this.Items[this.Items.length - 1];
      });
    },
    addItem() {
      const newestValue = parseFloat(this.newestItem?.amount || "0");
      const minAllowedValue = 10;
      const maxAllowedValueMag = newestValue * 1.1;
      const minAllowedValueMag = newestValue * 0.9;
      const newValue = parseFloat(this.newItem.amount || "0");

      if (newValue < minAllowedValue){
        this.valueError = `金額は10円以上にしてね`;
        return;
      }
      
      //初めてアイテムを追加するときにnewestValue = 0円判定になるので、
      //newestValue = 0のときアイテム追加できるようにする
      if(newestValue != 0){
        if(newValue > maxAllowedValueMag || newValue < minAllowedValueMag) {
        this.valueError = `金額は現在のアイテムの±10%以内にしてね`;
        return;
        }
      }
      

      this.valueError = null; // 範囲内の数値入力した時にはエラーメッセージをクリア

      ItemService.createItem(this.newItem).then((response) => {
        this.serverMessage = response.data;
        this.fetchItems();
        this.newItem = { name: "", amount: "" };

        setTimeout(() => {
          this.serverMessage = null;
        }, 3000);
      });
    },
    confirmDelete(itemId) {
      this.confirmedItemId = itemId; // 削除対象のIDを保存
      this.confirmDeleteDialogVisible = true; // ダイアログを表示
    },
    deleteItem(itemId) {
   ItemService.deleteItem(itemId)
     .then((response) => {
       this.serverMessage = response.data;
       this.fetchItems(); // データを再取得
       this.closeDeleteDialog(); // ダイアログを閉じる
       setTimeout(() => {
          this.serverMessage = null;
        }, 3000);
     })
     .catch((error) => {
       console.error("アイテム削除エラー:", error);
       this.serverMessage = "アイテム削除に失敗しました";
     });
 },
 closeDeleteDialog() {
      this.confirmDeleteDialogVisible = false; // ダイアログを閉じる
      this.confirmedItemId = null; // 削除対象のIDをリセット
 },
    validateNumericInput(event) {
      const value = event.target.value;
      const numericValue = value.replace(/\D/g, ""); // 非数値を削除
      this.newItem.amount = numericValue;
    },
    formatDate(dateString) {
      if (!dateString) return "N/A";
      const date = new Date(dateString.replace(" ", "T"));
      return date.toLocaleString();
    },
    closePopup() {
      this.valueError = null;  // ポップアップ閉じる
    }
  },
  mounted() {
    this.fetchItems();
  },
};
</script>


<style scoped>
/* 全体のコンテナ */
.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

/* タイトル */
.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

/* 新しいアイテムのカード */
.newest-item-card {
  background: #e9ecef;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #495057;
  transform: scale(1);
  transition: transform 0.5s ease, background-color 0.5s ease;
}

/* ハイライトアニメーション */
.highlight-enter-active {
  animation: highlight-flash 1s ease-out;
}
.highlight-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}

@keyframes highlight-flash {
  0% {
    transform: scale(1);
    background-color: #e9ecef;
  }
  50% {
    transform: scale(1.2);
    background-color: #ffdd57;
  }
  100% {
    transform: scale(1);
    background-color: #e9ecef;
  }
}

/* フォーム */
.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
}

.button {
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.button:hover {
  background: #0056b3;
}

/* アイテムリスト */
.item-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item-card {
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  transition: transform 0.3s, box-shadow 0.3s;
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* フェードアニメーション */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.delete-button {
   background-color: red;
   color: white;
   border: none;
   padding: 5px 10px;
   cursor: pointer;
   border-radius: 5px;
 }
 .delete-button:hover {
   background-color: darkred;
 }

/* ポップアップのスタイル */
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 9999; /* z-index を大きくする */
}


.popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-close {
  background: transparent;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
}

.popup-content p {
  margin-bottom: 20px;
  font-size: 16px;
}

.dialog-actions {
  display: flex;
  justify-content: space-around;
}

.cancel-button {
  background: #dc3545;
}

.cancel-button:hover {
  background: #c82333;
}

</style>
