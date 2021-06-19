<template>
  <div id="Timer">
    <div class="title is-4 has-text-centered">
      Refresh page if clock doesn´t work(bug)
<figure class="image is-128x128">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVCD945-5cf0DGejTVRQ-MNi8RdV48I6XsQ&usqp=CAU">
</figure>
        <div class="clock">
            <span id="hr">00</span>
            <span> : </span>
            <span id="min">00</span>
            <span> : </span>
            <span id="sec">00</span>
        </div>
<Timer />
</div>
    </div>
</template>
<script>
import Timer from '../components/Timer.vue'

export default {
  components: { Timer }
}
</script>