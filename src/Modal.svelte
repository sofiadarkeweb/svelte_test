<script>
let showModal = true;
export let isPromo = false;
export let message;
</script>

{#if showModal}
<div class="backdrop" class:promo={isPromo}>
    <div class="modal">
        <p>{message}</p>
    </div>
</div>
{/if}

<style>

.backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background:rgba(0,0,0,0.8);
    /* color: white; */
    /* display: flex; */
  
}

.modal {
    padding: 1rem;
    border-radius: 1rem;
    max-width: 400px;
    background: white;
    text-align: center;
    margin: 10% auto;
   
}

.promo .modal {
    background: black;
}
</style>