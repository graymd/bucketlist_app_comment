Julie Johnson & Malachi Gray

User builds/manages bucket list

this software will:

--- allow users to login and view different bucket list ideas.

--- users will be able to select ideas and add those ideas to their own bucket list.

--- users will be able to add photos and stories of bucket list items they have previously completed.

--- users will be able to add comments to the ideas

# Requirements Document


### Elevator

<p>The bucket list application will allow users to custom build their own bucket list from stock ideas and ideas submitted from other users.  Users will be able to comment and discuss items they have completed.</p>


### MVP Features

- user login with authentication

- navigation between views (splash page, login/signup, bucket list browse, personal bucket list)

- CRUD for bucket list items

- CRUD for users

- User authorizations

- ability to search bucket list items

- ability to see locations on maps

- ability to add bucket list items to user personal bucket

- ability to mark items as completed on user personal bucket

- user able to comment on completed items


### MVP Stories

Setup environment
  - start front end project - 2 hrs
  - start back end project (include required gems) - 3 hrs
  - setup heroku app - 2 hrs
  - setup assets (angular, underscore, angular routes, jquery)

Handing off data/tokens between rails API and angular front end - 2 days
  - If unable to successfully complete hand off, move to project within rails environment

App styling
  - Block off elements for navbar and front page - 2 hrs
  - NAVBAR and main page layout - 2 hrs
  - login page - 1 hr
  - sign up page 1 hr
  - select your bucket list interests - 2hrs
  - select the bucket list ideas - 2hrs
  - bucket list idea show page - 2hrs
  - user bucket list page - 2hrs

Create CRUD for bucket list items with Rspec testing - 3hrs
Setup search for bucket list items with Rspec testing - 1 hr
Create User authentication within rails only - 1 hr
Create User can abilities - 6 hrs
See locations on google maps - 1 day
CRUD for user comments with Rspec testing - 4 hrs


### Technologies

- angularjs, jquery, javascript, media query, underscore, illustrator/photoshop, mocha chia
-rails, bootstrap, devise/omniauth, cancancan, spec, s3 for images, heroku, google maps api


### Wireframes

See image file


### Roadmap (additional features)

- user able to upload picture from phone
- user able to crosspost to facebook items completed/added
- user able to cross post to twitter
- displays bucket completion bar
- displays graphs for selected items vs. completed
- google analytics
- sends user message saying new bucket list item matching their interests has been added

## User Story Template

#### Name

  Ability to utilize bucket list app.


#### Value Statement: 

As an admin user,
I want the ability to create bucket list items
so that the user has multiple items to select from to create their perfect list

As a user,
I want the ability to login to my account
so that I have the ability to create my own personal bucket list


####  Assumptions
- We can assume that we know what interests we are going to add
- We can assume that the pages are protected and only the admin can edit


#### Acceptance Criterion

1. admin/user is able to create a new item
2. admin is able to update an item
3. admin is able to delete an item
4. user is able to add bucket list items to their personal bucket
5. user is able to comment on bucket list items


#### Notes


#### Assumptions

#### Acceptance 

#### Notes or unknowns





http://scrumtrainingseries.com/BacklogRefinementMeeting/BacklogRefinementMeeting.htm
  