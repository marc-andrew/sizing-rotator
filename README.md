sizing-rotator
==============

A jQuery plugin to rotate content on click.


### Example
* [Whistles Sizing Page](http://www.whistles.com/customer-service/sizing.html)
* [Demo Page](http://marcandrew.net/sizing-rotator)

### Getting Started
Load [jQuery(1.7+)](http://jquery.com/) and include Sizing Rotator plugin file.
Add the stylesheet (sizingrotator.css) and the plugin (jquery.sizingrotator.js or jquery.sizingrotator.min.js) in your website.
The stylesheet can be modified to fit the website design.

```html
<!-- Basic stylesheet -->
<link rel="stylesheet" type="text/css" href="sizingrotator/sizingrotator.css" />

<!-- Include js plugin -->
<script src="sizingrotator/jquery.sizingrotator.js"></script>
```

### Basic Navigation Markup

```html
<div id="size_instructions_rotator">
	<ul class="selectors">
		<li><a href="#bust">Bust</a></li>
		<li><a href="#waist">Waist</a></li>
		<li><a href="#hip">Hip</a></li>
		<li><a href="#overarm">Overarm</a></li>
		<li><a href="#height">Height</a></li>
	</ul>

	<ul class="rotating_images">
		<li><img alt="Image 1" src="images/img_1.jpg"></li>
		<li><img alt="Image 2" src="images/img_2.jpg"></li>
		<li><img alt="Image 3" src="images/img_3.jpg"></li>
		<li><img alt="Image 4" src="images/img_4.jpg"></li>
		<li><img alt="Image 5" src="images/img_5.jpg"></li>
	</ul>

	<ul class="rotating_txt">
		<li>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
		</li>
		<li>
			<p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
		</li>
		<li>
			<p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
		</li>
		<li>
			<p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
		</li>
		<li>
			<p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
		</li>
	</ul>
</div>
```

### Call the plugin
Now call the Off Canvas Push Infinity initializer function and your mobile navigation is ready.

```html
<script type="text/javascript">

	$('#size_instructions_rotator').sizingrotator();

</script>
```

### License
The MIT License (MIT)