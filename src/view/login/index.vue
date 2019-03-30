<style scoped>

  .dasd{
    cursor: pointer;
    transition:all 0.4s;
  }
  .dasd:hover{
    transform: scale(1.1);

  }
</style>
<template>
    <Layout  class="main">
      <Header class="header-con">
        <header-bar>
          <user :message-unread-count="unreadCount" :user-avator="userAvator"/>
        </header-bar>
      </Header>
      <Layout>
        <Content :style="{padding: '10px 10px', minHeight: '280px', background: '#f0f0f0'}">
          <Layout>
            <Sider width="350" hide-trigger :style="{background: '#fff'}" >
              <Tabs value="name1">
                <TabPane label="联盟列表" name="name1">
                  <div >
                    <Row>
                      <Col span="20"  offset="2">
                        <Input  placeholder="Enter something..." style="width: 200px;" /><Button type="primary" style="margin-left: 5px">Primary</Button>
                      </Col>
                    </Row>
                  </div>
                  <div  style="margin-top:10px;width:350px;height:720px;overflow-y: auto">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                      <Row>
                        <Col  v-for="item in cityList" span="20" offset="4" style="margin-top: 20px">
                          <Card @click.native="gg1(item.label)" class="dasd" style="height: 80px;width: 80%;background-color: #eaeaea">
                            <h1>{{item.value}}</h1>
                          </Card>
                        </Col>
                      </Row>
                    </Menu>
                  </div>
                </TabPane>
              </Tabs>
            </Sider>
            <Content :style="{padding: '0px', minHeight: '280px', background: '#fff'}">
              <Tabs value="name2">
                <TabPane label="业务系统" name="name2">
                  <div style="margin-bottom: 10px">
                    <Row>
                      <Col span="16"  offset="6">
                        <Input  placeholder="Enter something..." style="width: 400px;" /><Button type="primary" style="margin-left: 5px">Primary</Button>
                      </Col>
                    </Row>
                  </div>
                  <Card>
                    <div style="height: 700px;overflow-y: auto">
                      <Row style="margin-left:30px;">
                        <Col v-for="item in cityList" span="6" :xs="24" :sm="24" :md="12" :lg="8" style="margin-top: 20px">
                          <Card class="dasd" @click.native="gohome" style="height: 200px;width: 90%;background-color: #eaeaea">
                            <h1>{{item.value}}</h1>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </TabPane>
                <TabPane label="后台管理系统" name="name3">
                  <div style="margin-bottom: 10px">
                    <Row>
                      <Col span="16"  offset="6">
                        <Input  placeholder="Enter something..." style="width: 400px;" /><Button type="primary" style="margin-left: 5px">Primary</Button>
                      </Col>
                    </Row>
                  </div>
                  <Card>
                    <div   style="height: 700px;overflow-y: auto">
                      <Row style="margin-left:30px;">
                        <Col v-for="item in cityList" span="6" :xs="24" :sm="24" :md="12" :lg="8" style="margin-top: 20px">
                          <Card class="dasd"  style="height: 200px;width: 90%;background-color: #eaeaea">
                            <h1>{{item.value}}</h1>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </TabPane>
              </Tabs>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>

</template>
<script>

  import HeaderBar from '../../components/main/components/header-bar/header-bar-index'

  import User from '../../components/main/components/user'

  import {mapActions, mapGetters } from 'vuex'


  export default {
    name: 'index',
    components: {
      HeaderBar,
      User,

    },
    data() {
      return {
        isFullscreen: false,
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
          ,
          {
            value: 'Canberra',
            label: 'Canberra'
          }
          ,
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
      }
    },
    methods:{
      ...mapActions([
        'getUnreadMessageCount'
      ]),
      gohome(){
        this.$router.push({
          name: "home"
        })
  }
  },
    computed: {
      ...mapGetters([
        'errorCount'
      ]),
      userAvator() {
        return this.$store.state.user.avatorImgPath
      },

      local() {
        return this.$store.state.app.local
      },
      hasReadErrorPage() {
        return this.$store.state.app.hasReadErrorPage
      },
      unreadCount() {
        return this.$store.state.user.unreadCount
      }
    },
    mounted() {
      this.getUnreadMessageCount()
    }
  }
</script>

