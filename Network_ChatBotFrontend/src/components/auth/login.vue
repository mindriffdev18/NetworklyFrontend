<script>
    export default {
        name: 'login'
    }
</script>

<template>
    <section class="mainLogin">
        <div class="container">
            <div class="main_login_sec">
                <div class="loginForm">
                    <div class="login_left">
                        <img src="../../assets/login.jpg">
                    </div>
                    <div class="login_right">
                        <h2>Welcome to <span style="">Networkly</span></h2>
                        <p>Please Fill Your Sign In detail</p>
                        <form class="login_form_design">
                            <div class="fieldDesign">
                                <label for="fname">Email:</label>
                                <input type="email" id="fname" name="fname">
                            </div>
                            <div class="fieldDesign">
                                <label for="lname">Password:</label>
                                <input type="password" id="lname" name="lname">
                            </div>
                            <div class="checkBox">
                                <div>
                                    <input type="checkbox" id="check-1">
                                    <label for="check-1">Keep me signed in</label>
                                </div>
                                <div class="forget_password">
                                    <a href="#">Forgot password</a>
                                </div>
                            </div>
                            <button class="submit_btn">Sign in</button>
                            <a href="#" class="">Create an account</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>