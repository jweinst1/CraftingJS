#CraftingJS

CraftingJS is a variable writing engine written in javascript.

It uses a JSON file of over 24,000 words to randomly generate real, English word variables for you to use for code writing or other random purposes.

##Installation

To install the package:

```
npm install craftingjs
```

Then for usage in your node programs, simply do

```
var crafting = require('craftingjs');
```

##Usage

The package comes with an object called the VariableSet, which manages your variables for you in the form of an iterator.

It supports the following methods:

###`.contains(name)`:

Checks if a variable name has already been iterated, or exists in the set.

###`.newVar()`:

Randomly retrieves a new variable and adds it to th set, with a reference count of 1, and returns the variable.

###`.pickVar()`:

Randomly picks an already existing variable in the Variable set.

###`.decRef(name)`:

Decreases the reference count of an existing variable if it exists, and deletes it if the reference count reaches 0.