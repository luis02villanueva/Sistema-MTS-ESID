<template lang="">
    <div class="d-flex flex-column flex-root">
        <div class="d-flex flex-column flex-lg-row flex-column-fluid">
            <div
                class="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative"
                style="background-color: #f2c98a"
            >
                <div
                    class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y"
                >
                    <div
                        class="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20"
                    >
                        <a href="../../demo1/dist/index.html" class="py-9 mb-5">
                            <img
                                alt="Logo"
                                src="assets/media/logos/logo-2.svg"
                                class="h-60px"
                            />
                        </a>
                        <h1
                            class="fw-bolder fs-2qx pb-5 pb-md-10"
                            style="color: #986923"
                        >
                            Welcome to Metronic
                        </h1>
                    
                        <p class="fw-bold fs-2" style="color: #986923">
                            Discover Amazing Metronic <br />with great build
                            tools
                        </p>
                    </div>

                    <div
                        class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
                        style="
                            background-image: url(assets/media/illustrations/sketchy-1/13.png;;;;;;;
                        "
                    ></div>
                </div>
            </div>
            <div class="d-flex flex-column flex-lg-row-fluid py-10">
                <div class="d-flex flex-center flex-column flex-column-fluid">
                    <div class="w-lg-500px p-10 p-lg-15 mx-auto">
                        <form
                            class="form w-100"
                            novalidate="novalidate"
                            id="kt_sign_in_form"
                            data-kt-redirect-url="../../demo1/dist/index.html"
                            action="#"
                        >
                            <div class="text-center mb-10">
                                <h1 class="text-dark mb-3">
                                    Sign In to Metronic
                                </h1>
                                <div class="text-gray-400 fw-bold fs-4">
                                    New Here?
                                    <a
                                        href="../../demo1/dist/authentication/layouts/aside/sign-up.html"
                                        class="link-primary fw-bolder"
                                        >Create an Account</a
                                    >
                                </div>
                            </div>
                            <div class="fv-row mb-10">
                                <label
                                    class="form-label fs-6 fw-bolder text-dark"
                                    >Email</label
                                >
                                <input
                                    class="form-control form-control-lg form-control-solid"
                                    type="text"
                                    v-model="form.email"
                                    name="email"
                                    autocomplete="off"
                                />
                            </div>
                            <div class="fv-row mb-10">
                                <div class="d-flex flex-stack mb-2">
                                    <label
                                        class="form-label fw-bolder text-dark fs-6 mb-0"
                                        >Password</label
                                    >
                                    <a
                                        href="../../demo1/dist/authentication/layouts/aside/password-reset.html"
                                        class="link-primary fs-6 fw-bolder"
                                        >Forgot Password ?</a
                                    >
                                </div>
                                <input
                                    class="form-control form-control-lg form-control-solid"
                                    type="password"
                                    name="password"
                                    v-model="form.password"
                                    autocomplete="off"
                                />
                            </div>
                            <div class="text-center">
                                <button
                                    type="submit"
                                    id="kt_sign_in_submit"
                                    class="btn btn-lg btn-primary w-100 mb-5"
                                >
                                    <span class="indicator-label"
                                        >Continue</span
                                    >
                                    <span class="indicator-progress"
                                        >Please wait...
                                        <span
                                            class="spinner-border spinner-border-sm align-middle ms-2"
                                        ></span
                                    ></span>
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
                <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
                    <!--begin::Links-->
                    <div class="d-flex flex-center fw-bold fs-6">
                        <a
                            href="https://keenthemes.com"
                            class="text-muted text-hover-primary px-2"
                            target="_blank"
                            >About</a
                        >
                        <a
                            href="https://devs.keenthemes.com"
                            class="text-muted text-hover-primary px-2"
                            target="_blank"
                            >Support</a
                        >
                        <a
                            href="https://1.envato.market/EA4JP"
                            class="text-muted text-hover-primary px-2"
                            target="_blank"
                            >Purchase</a
                        >
                    </div>
                    <!--end::Links-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                email: null,
                password: null,
            },
        };
    },
};
</script>
<style lang=""></style>
