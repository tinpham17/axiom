<script setup lang="ts">
import { settings } from '../settings'
import { NavLink } from '../types'
import imgLayoutTile from '@/assets/images/icn-ui-layout-tile.svg'
import imgAxis from '@/assets/images/icn-ui-axis.svg'
import imgStatus from '@/assets/images/icn-ui-status.svg'
import imgTree from '@/assets/images/icn-ui-settings-3.svg'
import { useRoute } from 'vue-router'

const links: NavLink[] = [
  {
    img: imgLayoutTile,
    label: 'Operator',
    to: settings.routes.operator
  },
  {
    img: imgAxis,
    label: 'Distributor',
    to: settings.routes.distributor
  },
  {
    img: imgStatus,
    label: 'Partner',
    to: settings.routes.partner
  },
  {
    img: imgTree,
    label: 'Customer',
    to: settings.routes.customer
  }
]

const route = useRoute()
</script>

<template>
  <div class="container">
    <div class="logo">
      <Link to="/">
        <!-- <img src={imgLogo} alt="Logo" /> -->
      </Link>
    </div>
    <ul class="navbar">
      <li v-for="link of links" :class="{'active': link.to === route.path}">
        <router-link :to="link.to">
          <img :src="link.img" :alt="link.label" />
          <span>{{link.label}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 80px;
  background-color: #122531;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
.logo {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 12px;
  border-bottom: 1px solid #2a3b46;;
}
.navbar {
  list-style: none;
  margin-top: 88px;
  li {
    height: 64px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border-right: 4px solid transparent;
    &:first-of-type {
      margin-top: 0;
    }
    &:hover {
      opacity: 0.7;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      span {
        font-size: 10px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: 0.3px;
        color: #dbdee0;
        margin-top: 8px;
      }
    }
  }
  li.active {
    border-right: 4px solid #009df9;
    a {
      span {
        color: #009df9;
      }
    }
    img {
      filter: brightness(75%) sepia(100) saturate(100) hue-rotate(200deg);
    }
  }
}
</style>
