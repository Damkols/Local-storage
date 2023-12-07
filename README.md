# React + Vite

## Run project with

```bash
npm run dev
```

## To check to confirm that app uses Local storage to store Data

### Open The Developer Tools

In most browsers, you can open the Developer Tools by right-clicking on your web page and selecting "Inspect" or "Inspect Element." Alternatively, you can use the keyboard shortcuts:

Chrome: Ctrl + Shift + I (Windows/Linux) or Cmd + Opt + I (Mac)

Firefox: Ctrl + Shift + I (Windows/Linux) or Cmd + Opt + I (Mac)

Safari: Cmd + Opt + I

### Then Navigate to the "Application" Tab:

Once the Developer Tools are open, look for the "Application" tab. In Chrome, it may be labeled as "Application," and in Firefox, it might be labeled as "Storage" or "Web Storage."

### Locate "Local Storage":

In the "Application" or "Storage" tab, you should see a section called "Local Storage" in the sidebar. Click on it and locate "localhost"
or wherever the app is running, you should see the data being stored in an array of objects, it also keeps track of changes made to the data.
Like completing a todo, deleting a todo etc

`0
: 
{name: "Take Trash out", checked: false, id: 1701956586131}
{name: "Watch Football", checked: true, id: 1701956578380}`
