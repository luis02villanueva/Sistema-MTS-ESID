<template lang="">
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <SidebarVue></SidebarVue>
            <div
                class="wrapper d-flex flex-column flex-row-fluid"
                id="kt_wrapper"
            >
                <NavbarVue></NavbarVue>

                <div
                    class="content d-flex flex-column flex-column-fluid"
                    id="kt_content"
                >
                    <ToolbarVue></ToolbarVue>
                    <div class="post d-flex flex-column-fluid" id="kt_post">
                        <router-view></router-view>
                    </div>
                </div>
                <FooterVue></FooterVue>
            </div>
        </div>
    </div>
</template>
<script>
import FooterVue from "./Footer.vue";
import NavbarVue from "./Navbar.vue";
import SidebarVue from "./Sidebar.vue";
import ToolbarVue from "./Toolbar.vue";
export default {
    components: {
        FooterVue,
        NavbarVue,
        SidebarVue,
        ToolbarVue,
    },
};
</script>
<style lang=""></style>
