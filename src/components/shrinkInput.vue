<template>
  <div id="nav-bottom-menu">
    <form method="get" id="searchform" action="/" class="form-Parent">
      <input type="text" class="field input-con" name="s" id="s" placeholder="search">
      <!-- <input type="submit" class="submit" name="submit" id="searchsubmit" value="Search" /> -->
    </form>
  </div>
</template>
<script>
export default {
    data () {
        return {}
    }
}
</script>

<style lang="css" scoped>
input[type="text"],
input[type="password"],
textarea {
  background: #fafafa;
  border: 1px solid #ddd;
  color: #888;
}

input[type="text"]:focus,
textarea:focus {
  color: #373737;
  border: 1px solid #dcdfe6;
}

input#s {
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 12px;
  height: 22px;
  line-height: 1.2em;
  /* padding: 4px 10px 4px 10px; */
}

/* Assistive text */
.assistive-text {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px);
  /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}

/* Search Form */
#nav-bottom-menu #searchform {
  position: absolute;
  /* top: 19px; */
  right: 20px;
  text-align: right;
}

#branding #searchform {
  position: relative;
  top: -7.6em;
  text-align: right;
}

#branding #searchform div,
#nav-bottom-menu #searchform div {
  margin: 0;
}

#branding #s,
#nav-bottom-menu #s {
  background-color: #f9f9f9;
  -webkit-transition-duration: 400ms;
  -webkit-transition-property: width, background;
  -webkit-transition-timing-function: ease;
  -moz-transition-duration: 400ms;
  -moz-transition-property: width, background;
  -moz-transition-timing-function: ease;
  -o-transition-duration: 400ms;
  -o-transition-property: width, background;
  -o-transition-timing-function: ease;
  width: 20px;
}

#branding #s:focus,
#nav-bottom-menu #s:focus {
  background-color: #f9f9f9;
  width: 160px;
}

#branding #searchsubmit,
#nav-bottom-menu #searchsubmit {
  display: none;
}
</style>
