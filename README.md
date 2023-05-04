# PhoneMaskInputRus

### Plugin for mask Russian phone numbers inside html input.


### View [demo](demo/index.html)


## How to use this plugin

1. Plug in minified JS file: 

```html
<script href="PhoneMaskInputRus.min.js"></script>
```

2. You can add custom data-attribute (like data-tel-input in this example) to specific input:

```html
<input type="text" placeholder="Phone" autofocus data-tel-input>
```

3. Call the plugin:

```html
<script>
    new PhoneMaskInputRus('input[data-tel-input]');
</script>
```

Plugin class argument must be in format such as:

```html
<script>
    document.querySelectorAll(argument);
</script>