# greenField - instaSmurf #


# git workflow # 
create org repo
everyone clone org repo
create feature branch
*   git checkout -b FEATURE_NAME
work on feature branch
when finished
*   git push origin FEATURE_NAME
make pull request from feature branch to master
 
//to get latest changes
* git checkout master
* git pull origin master
* git checkout FEATURE_NAME
* git rebase master
MASTER ONLY PULL AND REBASE


This repo serves as the homepage for HRLA20 greenField project

## General Info ##

 * Master: John
   * 1
   * 2
   * 3

## Router ##

* get('/');

### Sign up ###

*  post("/login");

*  post("/signup");

*  post("/logout");

### Render Feed ###

*  get('/:username')

*  get('/:username/follower')

*  get('/:username/all')

### Modify Followers ###

*  post('/:username/follower');  add follower
*  put('/:username/follower');  approve follower
*  delete('/:username/follower'); remove follower

### Comment ### 

*  get('/:username/:photoId/comments')

### Retrieve Comments for Individual Photo ###

*  post('/:username/:photoId/comments') add

*  delete('/:username/:photoId/comments') delete

*  put('/:username/:photoId/comments'); edit


### Post New Photo ###

*  post('/:username/content'); add new post

*  router.delete('/:username/content'); delete post

### Likes ###

*  post('/:photoId/like') add a like

*  delete('/:photoId/like') remove a like

## Scheme ##

---        | Users        | ---
---        | ---          | ---
User       |String        | Uniq
UserId     |String        | Uniq
Followers  |String Array         | 
Pending Followers  |Array         | 
Following  |Array         | 
Pending Following  |Array       
ProfilePic |String        | 
Bio        |String        |

---        | Comment      | ---
---        | ---          | ---
User       |String        | 
Photo      |IDphoto       | 
Text       |String        | 
Date       |TimeStamp     | 

---        | Photo        | ---
---        | ---          | ---
User       |String        | 
PhotoUrl   |String        | 
Description|String        | 
Likes      |String Array  | 

*Note:* We must fill this


## Work Break Down ##

 * Week 1
   * 1
   * 2
   * 3
