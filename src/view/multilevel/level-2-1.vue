<template>
  <div>
    <Card>
      <Button type="primary">Primary</Button>
      <Button STYLE="margin-left: 10px" type="success">Success</Button>
      <Form style="margin-top: 10px" ref="formInline" :label-width="80" :model="formInline"  >
        <Row>
          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <Input class="inputBoX"  placeholder="Enter your name"></Input>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <Select class="inputBoX">
                <Option value="beijing">New York</Option>
                <Option value="shanghai" disabled>London</Option>
                <Option value="shenzhen">Sydney</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <DatePicker class="inputBoX"  type="date" placeholder="Select date"></DatePicker>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <Input class="inputBoX"   placeholder="Enter your name"></Input>
            </FormItem>
          </Col>
       0

          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <Input class="inputBoX"  placeholder="Enter your name"></Input>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <Select class="inputBoX">
                <Option value="beijing">New York</Option>
                <Option value="shanghai" disabled>London</Option>
                <Option value="shenzhen">Sydney</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <DatePicker class="inputBoX"  type="date" placeholder="Select date"></DatePicker>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <Input class="inputBoX"   placeholder="Enter your name"></Input>
            </FormItem>
          </Col>

          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <Input class="inputBoX"  placeholder="Enter your name"></Input>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <Select class="inputBoX">
                <Option value="beijing">New York</Option>
                <Option value="shanghai" disabled>London</Option>
                <Option value="shenzhen">Sydney</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <DatePicker class="inputBoX"  type="date" placeholder="Select date"></DatePicker>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="6" >
            <FormItem label="审核日期其" prop="name">
              <Input class="inputBoX"   placeholder="Enter your name"></Input>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>
  </div>
</template>
<script>


export default {
  name: 'level_2_1',

  data () {
    return {
      }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>

<style scoped>
  .inputBoX{
    width: 70%;
    min-width: 140px;
  }
  .ivu-col{
    height: 40px;
  }
</style>
