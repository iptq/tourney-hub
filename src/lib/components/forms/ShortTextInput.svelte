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
    
        <input
            type="text"
            bind:value={value}
            required={required}
            disabled={disabled}
            placeholder="{placeholder}"
        />    
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
