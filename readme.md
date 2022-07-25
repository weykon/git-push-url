# Usage
- example
    - javascript example
    ```javascript
    var add_git_push_url = require('add-git-push-url')
    add_git_push_url('https://github.com/your-user/your-repo')
    ```
    - typescript example
    ```typescript
    import add_git_push_url from 'add-git-push-url'
    add_git_push_url('https://github.com/your-user/your-repo')
    ```

## Todo

- [ ] add flush
- [ ] auto clear itself (child_process: npm uninstall add-git-push-url)
    > check file "package-lock.json" and "?yarn-lock.json" in the project folder to decide which command to execute
