<template>
  <div>
    <div class="user-avator-dropdown">
      <Dropdown @on-click="handleClick">
        <Badge :dot="!!messageUnreadCount">
          <Avatar :src="userAvator"/>
        </Badge>
        <Icon :size="18" type="md-arrow-dropdown"></Icon>
        <DropdownMenu slot="list">
          <DropdownItem name="message">
            消息中心<Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
          </DropdownItem>
          <DropdownItem name="logout">退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <Drawer title="Basic Drawer" width="720" :closable="false" v-model="opmessage">
      <Message></Message>
    </Drawer>
  </div>
</template>

<script>
import './user.less'
import Message from '@/view/single-page/message/index.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    Message
  },
  data(){
    return{
      opmessage:false
    }
  },
  name: 'User',
  props: {
    userAvator: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    logout () {
      this.handleLogOut().then(() => {
        this.$router.push({
          name: 'login'
        })
      })
    },
    message () {
      this.$router.push({
        name: 'message_page'
      })
    },
    handleClick (name) {
      switch (name) {
        case 'logout': this.logout()
          break
        case 'message': this.opmessage=true
          break
      }
    }
  }
}
</script>
