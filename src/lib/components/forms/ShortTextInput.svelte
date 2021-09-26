<script lang="ts">
    export let fieldName:   string = "";
    export let value:       string  = "";
    export let required:    boolean = false;
    export let disabled:    boolean = true;
    export let placeholder: string  = "";
</script>

<div>
    <div class="field-name">
        {fieldName}
    </div>
    
    <!-- Svelte doesn't like it when I put the if statement 
         inside of the <input/> tag for the "required" variable -->
    {#if required}
        <input
            type="text"
            value={value}
            required
            disabled={disabled}
            placeholder="{placeholder}"
        />    
    {:else}
        <input
            type="text"
            value={value}       
            disabled={disabled}
            placeholder="{placeholder}"
        />
    {/if}
</div>

<style>
    div {
        width: 100%;
    }

    div.field-name {
        margin-bottom: 1rem;
    }

    input {
        background-color: var(--lighter-bg-color);
        color: var(--main-font-color);
        border: none;
        border-radius: 2px;
        
        padding: 0.5rem;
        width: calc(100% - 1rem);
    }

    input:focus {
        outline: none;
        box-shadow:inset 0px 0px 0px 2px var(--main-font-color);
    }
</style>