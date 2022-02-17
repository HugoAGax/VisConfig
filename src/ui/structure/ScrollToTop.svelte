<script lang="ts">
  import "../../variables.css";

  let hidden: boolean;

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollChange = () => {
    console.log("Scroll Position", window.scrollY);
    if (window.scrollY > 0) {
      hidden = false;
    } else {
      hidden = true;
    }
  };

  handleScrollChange();
</script>

<svelte:window on:scroll={handleScrollChange} />
<div class="to-top" on:click={goToTop} class:hidden>
  <span>↑</span>
</div>

<style>
  .to-top {
    position: fixed;
    border-radius: 1rem;
    height: 48px;
    width: 48px;
    background-color: #f3e8ff;
    color: #a855f7;
    right: 32px;
    bottom: 32px;
    cursor: pointer;
    transition: 0.2s;
  }

  .to-top:hover {
    background-color: #ffedd5;
  }

  .to-top span {
    font-size: 28px;
    line-height: 1.8;
  }

  .to-top.hidden {
    display: none;
  }
  .to-top {
    -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.5s; /* Firefox < 16 */
    -ms-animation: fadein 0.5s; /* Internet Explorer */
    -o-animation: fadein 0.5s; /* Opera < 12.1 */
    animation: fadein 0.5s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
