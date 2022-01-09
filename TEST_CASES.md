# Test cases

## Sign up

### **ID**: 01

**Title**: A user can Sign up

**Precondition**:

- A user is on the [http://localhost:8000/accounts/register/](http://localhost:8000/accounts/register/) page

**Data to enter:**

- Username: `sendcloud2022`

- Password: `kgq5ebh.heq4XTH\*tgu`

- Password confirmation: `kgq5ebh.heq4XTH\*tgu`

| **#** | **Step description** | **Expected result**                                                                           |
| --- | --- |-----------------------------------------------------------------------------------------------|
| 1 | Enter the data | The data is entered                                                                           |
| 2 | Click the Submit button | A user is redirected to the '/feeds/' page <br/>The 'Great success! Enjoy :)' message is displayed |

### **ID**: 02

**Title**: A user can not sign up without credentials

**Precondition**:

- A user is on the [http://localhost:8000/accounts/register/](http://localhost:8000/accounts/register/) page

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the Submit button | The 'Username', 'Password', 'Password confirmation' fields are highlighted red<br/>The 'This field is required' error message is displayed for every field |

### **ID**: 03

**Title**: A user can not sign up with not matching passwords

**Precondition**:

- A user is on the [http://localhost:8000/accounts/register/](http://localhost:8000/accounts/register/) page

**Data to enter:**

- Username: `sendcloud2022`

- Password: `kgq5ebh.heq4XTH\*tg`

- Password confirmation: `kgq5ebh.heq4XTH\*tgu`

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Enter the data | The data is entered |
| 2 | Click the Submit button | The 'Password confirmation' field is highlighted red<br/>The 'The two password fields didn't match' error message is displayed for the 'Password confirmation' field |

### **ID**: 04

**Title**: A user can not sign up with a special character in the username

**Precondition**:

- A user is on the [http://localhost:8000/accounts/register/](http://localhost:8000/accounts/register/) page

**Data to enter:**

- Username: `sendcloud2022#`

- Password: `kgq5ebh.heq4XTH\*tgu`

- Password confirmation: `kgq5ebh.heq4XTH\*tgu`

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Enter the data | The data is entered |
| 2 | Click the Submit button | The 'Username' field is highlighted red<br/>The 'Enter a valid username<br/>This value may contain only letters, numbers and @/./+/-/\_ characters' error message is displayed for the 'Username' field |

### **ID**: 05

**Title**: A user can not sign up with a password matching the username

**Precondition**:

- A user is on the [http://localhost:8000/accounts/register/](http://localhost:8000/accounts/register/) page

**Data to enter:**

- Username: `sendcloud@2022`

- Password: `sendcloud@2022`

- Password confirmation: `sendcloud@2022`

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Enter the data | The data is entered |
| 2 | Click the Submit button | The 'Password confirmation' field is highlighted red<br/>The 'The password is too similar to the username' error message is displayed for the 'Password confirmation' field |

### **ID**: 06

**Title**: A user can not sign up with a short password

**Precondition**:

- A user is on the [http://localhost:8000/accounts/register/](http://localhost:8000/accounts/register/) page

**Data to enter:**

- Username: `sendcloud2022`

- Password: `test`

- Password confirmation: `test`

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Enter the data | The data is entered |
| 2 | Click the Submit button | The 'Password confirmation' field is highlighted red<br/>The 'This password is too short. It must contain at least 8 characters' error message is displayed for the 'Password confirmation' field |

### **ID**: 07

**Title**: A user can not sign up with a entirely numeric password

**Precondition**:

- A user is on the [http://localhost:8000/accounts/register/](http://localhost:8000/accounts/register/) page

**Data to enter:**

- Username: `sendcloud2022`

- Password: `123`

- Password confirmation: `123`

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Enter the data | The data is entered |
| 2 | Click the Submit button | The 'Password confirmation' field is highlighted red<br/>The 'This password is entirely numeric' error message is displayed for the 'Password confirmation' field |

### **ID**: 08

**Title**: A user can not sign up with an already existing user

**Precondition**:

- A user is on the [http://localhost:8000/accounts/register/](http://localhost:8000/accounts/register/) page

- A user sendcloud2022 already exists

**Data to enter:**

- Username: `sendcloud2022`

- Password: `kgq5ebh.heq4XTH\*tgu`

- Password confirmation: `kgq5ebh.heq4XTH\*tgu`

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Enter the data | The data is entered |
| 2 | Click the Submit button | The 'Username' field is highlighted red<br/>The 'A user with that username already exists' error message is displayed for the 'Username' field |

### **ID**: 09

**Title**: A signed up user can logout

**Precondition**:

- A user is signed up in and is on the 'feeds/' page

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the Logout | A user is redirected to the [http://localhost:8000/](http://localhost:8000/) page<br/>The Login button is displayed on the right corner of the page<br/>The Signup button is displayed in the middle of the screen |

### **ID**: 10

**Title**: A user can log in

**Precondition**:

- A user is on the [http://localhost:8000/accounts/login/](http://localhost:8000/accounts/login/) page

- A user sendcloud2022 already exists

**Data to enter:**

- Username: `sendcloud2022`

- Password: `kgq5ebh.heq4XTH\*tgu`

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Enter the data | The data is entered |
| 2 | Click the Login button | A user is redirected to the '/feeds/' page<br/>The Feeds table is displayed<br/>The New Feed button is displayed<br/>The Logout button is in the right top corner of the page |

### **ID**: 11

**Title**: A user can not log in without credentials

**Precondition**:

- A user is on the [http://localhost:8000/accounts/login/](http://localhost:8000/accounts/login/) page

| **#** | **Step description** | **Expected result**                                                                                                          |
| --- | --- |------------------------------------------------------------------------------------------------------------------------------|
| 1 | Click the Login button | The 'Username', 'Password' fields are highlighted red<br/>The 'This field is required' error message is displayed for every field |

### **ID**: 12

**Title**: A user can not log in with an invalid password

**Precondition**:

- A user is on the [http://localhost:8000/accounts/login/](http://localhost:8000/accounts/login/) page

- A user sendcloud2022 already exists

**Data to enter:**

- Username: `sendcloud2022`

- Password: `kgq5ebh`

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Enter the data | The data is entered |
| 2 | Click the Login button | The 'Please enter a correct username and password. Note that both fields may be case-sensitive' error message is displayed<br/>A user is not logged in |

### **ID**: 13

**Title**: A none existing user can not login

**Precondition**:

- A user is on the [http://localhost:8000/accounts/login/](http://localhost:8000/accounts/login/) page

- A user doesn't sendcloud2022 exist

**Data to enter:**

- Username: `sendcloud2022`

- Password: `kgq5ebh`

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Enter the data | The data is entered |
| 2 | Click the Login button | The 'Please enter a correct username and password. Note that both fields may be case-sensitive' error message is displayed<br/>A user is not logged in |

### **ID**: 14

**Title**: A logged-in user can logout

**Precondition**:

- A user is logged in and is on the 'feeds/' page

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the Logout | A user is redirected to the [http://localhost:8000/](http://localhost:8000/) page<br/>The Login button is displayed on the right corner of the page<br/>The Signup button is displayed in the middle of the screen |

## Reading feeds

### **ID**: 15

**Title**: A user can add a feed

**Precondition**:

- A user is logged in and is on the 'feeds/' page

**Data to enter:**

- Feed URL: `http://www.nu.nl/rss/Algemeen`

| **#** | **Step description**                       | **Expected result**                                                                                                                                                                                                                                                 |
|-------|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | Click the New Feed button                  | A user is redirected to the 'feeds/new/' page                                                                                                                                                                                                                       |
| 2     | Enter the feed URL to the 'Feed URL' field | The URL is entered                                                                                                                                                                                                                                                  |
| 3     | Click the Submit button                    | A user is redirected to the overview page<br/>The info such as 'Added by', 'Feed URL', 'Date added', 'Last updated', 'Last checked' is displayed<br/>The feed's articles are displayed in the table<br/>The 'Date', 'Author', 'Comments' of these articles are displayed |

### **ID**: 16

**Title**: A user can view pages of the feed

**Precondition**:

- A user is logged in and is on the 'feeds/my/' page
- A user has already feeds added
- A feed that he has added has a lot of articles

| **#** | **Step description**                     | **Expected result**                                      |
|-------|------------------------------------------|----------------------------------------------------------|
| 1     | Click the Feed link                      | A user is redirected to the 'feeds/FeedID' page          |
| 2     | Click the >> button under the feed table | A user can see the next page with different articles     |
| 3     | Click the << button under the feed table | A user can see the previous page with different articles |

### **ID**: 17

**Title**: A user can see all feeds

**Precondition**:

- There are some feeds already added

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the All Feed link | A user is redirected to the 'feeds/' page<br/>A user can see all feedsThe 'Title', 'Last updated', 'Feed URL', 'Entries' are displayed in the Feeds table<br/>A user can click a title of a feed and can be redirected to the list of articles of the feed |

### **ID**: 18

**Title**: A user can see all his\her feeds

**Precondition**:

- A user is logged in
- A user has already several feeds added

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the My Feed link | A user is redirected to the 'feeds/my/' page<br/>A user can see his\her earlier added feeds<br/>The 'Title', 'Last updated', 'Feed URL', 'Entries' are displayed in the Feeds table<br/>A user can click a title of the feed and be redirected to the list of articles of the feed |

### **ID**: 19

**Title**: A user can check for the updates

**Precondition**:

- A user is logged in and is on the 'feeds/feedID' page

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the Check for updates button | A user can see the new articles added to the Feed list<br/>In case if there are no new articles the 'Nothing new yet...' message is displayed |

## Adding feeds

### **ID**: 20

**Title**: A user can bookmark his\her favorite feed

**Precondition**:

- A user is logged in and is on the 'feeds/feedID' page

| **#** | **Step description**                  | **Expected result**                                                                                                                                                                                                                                                 |
|-------|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | Click the empty Heart bookmark button | The heart icon become fully colored in blue                                                                                                                                                                                                                         |
| 2     | Click the Bookmarked link             | A user is redirected to the 'feeds/bookmarked/' page<br/>The previous feed is added to the bookmarked list<br/>The 'Title', 'Last updated', 'Feed URL', 'Entries' info is displayed<br/>A user can click a title of the feed and be redirected to the list of articles of the feed |

### **ID**: 21

**Title**: A user can leave a markdown comment on a feed's article

**Precondition**:

- A user is logged in and is on the 'feeds/feedID' page

**Data to enter:**

- Comment: `# This is a great article!`

| **#** | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click any article link | A user is redirected to the '/feeds/atricleID/entry/' page<br/>The 'Feed', 'Author', 'URL', 'Date added' info is presented<br/>The comment section is displayed |
| 2 | Add a comment and click Submit | The comment is added<br/>The 'Comment added successfully' is displayed<br/>A user can see his\her username next to the comment<br/>The comment has the markdown |


### **ID**: 22

**Title**: A user can not add a not RSS feed

**Precondition**:

- A user is logged in and is on the '/feeds/new/' page

**Data to enter:**

- URL: `https://github.com/`

| **#** | **Step description**           | **Expected result**                                                                                                                                             |
| --- |--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | Add the URL and click Submit   | The 'Please add RSS URL' is displayed<br/>The URL is not added                                                                                                  |

