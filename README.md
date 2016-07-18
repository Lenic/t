help documents:

```
todo list help:

  no parameter, -h, --help:

    show this help.

  your todo text:

    add new todo and return identity.

  -l, --list:

    show uncompoleted items.

  -a, --all:

    show all items.

  --clear

    clear all items and return none.

  -c <identity>, --completed <identity>:

    complete spesified item and return none;

  -i <identity>, --init <identity>:

    init spesified item and return none;

  -d <identity>, --delete <identity>

    remove spesified item and return none.
```

1. add new item

    ```
    $ t add a new item.
    $ t add another new item.
    $ t --list
    ```

    Will be shown:

    ```
    1 - INIT => add a new item.
    2 - INIT => add another new item.
    ```

1. list undone items.

    ```
    $ t -l
    ```

    Will be shown:

    ```
    1 - INIT => add a new item.
    2 - INIT => add another new item.
    ```

1. complete a item.

    ```
    $ t -c 1
    $ t --list
    ```

    Will be shown:

    ```
    2 - INIT => add another new item.
    ```

    The 1 is completed, so will not be shown at this time.

1. list all items.

    ```
    $ t -a
    ```

    Will be shown:

    ```
    1 - DONE => add a new item.
    2 - INIT => add another new item.
    ```

1. delete spesified item.

    ```
    $ t this is the third item.
    $ t --list
    ```

    Will be shown:

    ```
    2 - INIT => add another new item.
    3 - INIT => this is the third item.
    ```

    Now, we can delete item use `-d` parameter:

    ```
    $ t -d 3
    $ t --list
    ```

    Will be shown:

    ```
    2 - INIT => add another new item.
    ```

    We execute `t -a` show all items:

    ```
    1 - DONE => add a new item.
    2 - INIT => add another new item.
    ```

    We alos can delete a completed item use `-d` parameter:

    ```
    $ t -d 1
    $ t --all
    ```

    Will be shown:

    ```
    2 - INIT => add another new item.
    ```

1. clear all items:

    ```
    $ t --clear
    ```

    Will be delete all items, and will show none.

Now, you can use it:

```
npm install -g td-js
```
