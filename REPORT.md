# REPORT


## Process of Development


- Project is created using Angular.
	> Used Angular CLI
	> Component based project
	>
	> Used @Input(), @Output(), EventEmitters to receive and send data 
	>
	> You can filter the email list by 'from', 'to', 'subject' and 'date'
	>
	> You can sort email by 'from' when in mobile view using the arrow icon
- Used Angular Material specifically for 'date picker'
- Used SCSS for styling
	
	> This is best for flexibility and scability when styling your web application. You can create your own variables and mixins to make it reusable. Aside from flexibility it also helps the optimization of your css file to avoid redundant css rules. 
- Practiced OOP and SOLID principles of programming.	
- Created Interface to best describe object properties
- Used single responsibility of the component
- Used dependency injection to remove hard coded dependencies
	
	> Created a service when fetching the email list
- Using typescript and strict rules to easily debug errors

## Styling

- Used SCSS 
	
	> Created variables and mixins
	
- Responsibe Layout
	
	> Supports different platforms. E.g. Desktop, Tablet and Mobile view.
	>
	> Used Mixins to create media queries
	
- Flexbox
	
	> Used Flexbox to easily position elements. Didn't use Grid Layout due to browser supports
	
- CSS Reset

  > to reset the styling of all HTML elements to a consistent baseline.