---
date: 2019-04-22 07:00:00
title: Mình đã làm trang blog này như thế nào (Phần 1)?
description: Ý tưởng về một trang blog của mình sinh ra như thế nào?
keyword:
    - react
    - programming
    - guide
---

## Mở đầu

All right. Đây sẽ là bài blog đầu tiên trong đời của mình.

Ý tưởng làm một cái blog với mình thực ra đã có từ lâu rồi, nhưng mình chưa thực sự có thời gian để dành cho việc xây dựng một trang blog. Hơn nữa, viết blog là viết văn, và mình không giỏi văn cho lắm, vì thế mình cũng lo ngại rằng làm xong trang blog rồi mình lại lười viết.  

Nhưng mình đang trên con đường thay đổi bản thân mình, vậy bắt đầu từ đây cũng là một ý tưởng hay ho. 

Chuỗi blog này sẽ được viết trong khi mình đang tự tìm cách viết trang blog này, và nó sẽ là những bài đầu tiên được host trên trang. Thú vị ở chỗ, khi những bài này bắt đầu được viết, trang blog bạn đang đọc chưa tồn tại. 

Okay, let's get it started.

## Hướng làm trang web.

Yeah, về cơ bản thì mình có vài lựa chọn để làm blog.

Một là Wordpress, một cái CMS chuyên dùng để làm blog chuyên nghiệp cho người không biết gì về lập trình. Nhưng nếu muốn có sẵn một cái blog để mà viết, bạn phải trả tiền. Bạn vẫn có thể tải Wordpress về và tự deploy nó, nhưng:
- Wordpress là nguyên một cái server, có backend, frontend đàng hoàng. Host một cái đó sẽ cần dùng một thứ kiểu heroku hay thuê vps, những thứ phải trả tiền (thực ra heroku có thể dùng free nhưng mình có project khác dùng gần hết thời gian free rồi)
- Wordpress dùng PHP. PHP is so last year  

Hai là mình có thể viết mỗi bài blog trên một file HTML rồi quăng nó lên free hosting  

Nope, mình không phải người tiền sử. Cái đống này sẽ xấu hơn cả plaintext trong command prompt của mình.

Mình lúc này cũng biết chút ít về React, vậy tại sao không viết thử một cái bằng React cho nó đẹp và thời thượng. Thế nên mình tra Google "create blog with react" và nó chỉ ra cho mình Gatsby.js

Thực ra mình cũng đã nghe qua về Gatsby, nên làm blog bằng cái này nghe cũng có vẻ hay ho đấy.  

Guess this is another thing for me to learn then.

## Gatsby?
Gatsby là một "static site generator" (trình sinh web tĩnh). Về cơ bản nó cũng không khác gì `create-react-app`, bạn sẽ viết code bằng JS rồi khi build nó sẽ bundle thành một cục gồm HTML, CSS và JS mà bạn có thể vứt lên bất kỳ web host tĩnh nào.

Cách viết một blog bằng Gatsby có thể làm như sau. Bạn sẽ viết bài blog bằng định dạng md, cho nó vào thư mục pages, bundles lại rồi đẩy lên hosting. Nhưng Gatsby có thể kéo data từ nhiều nơi, không nhất thiết toàn bộ bài viết của bạn phải viết sẵn trong bundle code, mà có thể nằm ở CMS nào đó khác hay từ Database. Thế nhưng mà tạm thời mình cứ làm 
theo cách đầu thôi đã.

## Bắt đầu setup dự án.
Okay, nói trước, mình dùng yarn để làm dự án JS. Về cơ bản nó không khác lắm npm, bạn có thể lên mạng xem xem nó khác nhau ở đâu để sửa lại cho chạy được
Mình làm theo đúng sách giáo khoa của trang Gatsby. Đầu tiên tải cli của nó về.  
`yarn global add gatsby-cli`

Rồi vào thư mục Workspace, khởi tạo dự án:
`gatsby new blog`

Đây là những gì câu lệnh này tạo ra cho chúng ta
![files](files.png)

Không có gì đặc biệt lắm, giống create-react-app thôi.
Nhìn qua một chút, chúng ta sẽ thấy nó có một thư mục `src` nơi chúng ta để code. Ở thư mục này cần chú ý thư mục `pages`. Gatsby sẽ tự động đọc các file js trong này và tạo route cho nó trong trang web.

Các file `gatsby-*.js` dùng để tinh chỉnh một số setting của Gatsby. Tạm thời chưa sờ gì đến nó vội.

Okay chúng ta sẽ học cách bắt đầu làm việc với Gatsby trong bài sau
.

 


 