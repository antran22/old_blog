---
date: 2019-04-28
title: Mình đã làm trang blog này như thế nào (Phần 10)?
description: Deploy code.
keyword:
    - react
    - programming
    - guide
---

## Github Pages.
Github cung cấp một dịch vụ static web host cho người dùng. Mỗi người dùng có thể tạo một trang github page cá nhân và vô số trang phụ cho mỗi repo.

Với trang cá nhân, code của bạn sẽ được host ở `tên người dùng.github.io`. Github sẽ serve các file nằm trong branch master của repo có tên như trên.

Để bắt đầu, tạo một Github với tên như vậy:

![github](github.png)

Quay trở lại project của bạn, bạn sẽ cần một package đặc biệt để thực hiện việc deploy. Chạy câu lệnh `yarn add --dev gh-pages` để cài đặt package này.

Thêm dòng sau vào mục scripts ở file `package.json` 
```json
"deploy": "gatsby build && gh-pages -d public -b master",
```

Bây giờ, nếu bạn chạy câu lệnh `yarn deploy`, package sẽ hỏi tên đăng nhập và mật khẩu Github của bạn. Sau đó code của bạn sẽ được deploy lên đó.

## Lưu code.

Để lưu code của bạn trên cùng một repo, trước tiên `git branch deploy` để tạo một branch riêng dành riêng cho việc lưu code. Sau đó `git checkout deploy` và bạn có thể commit code vào branch này. Để đẩy lên repo, chạy các câu lệnh sau:

```bash
# Câu lệnh này chỉ chạy một lần.
git remote add origin https://github.com/tên người dùng/tên người dùng.github.io

# Mỗi lần commit code và push lên ta chạy
git commit -m "Miêu tả commit ở đây"
git push origin deploy  
```

Như vậy là bạn đã có thành công cho mình một trang blog cơ bản. Hãy học React.js thành thạo để có thể tự mình tùy biến trang web.
