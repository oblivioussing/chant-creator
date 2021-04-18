<template>
  <el-select placeholder="请选择">
    <el-option label="细" value="lighter"> </el-option>
    <el-option label="标准" value="normal"> </el-option>
    <el-option label="粗" value="bold"> </el-option>
  </el-select>
</template>

<script lang="ts">
export default {
  name: 'font-weight-select'
}
</script>

<style lang="scss" scoped></style>
