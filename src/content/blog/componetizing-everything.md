---
title: Componetizing everything
description: A look at how I'm componentizing everything in my life.
pubDate: 2023-07-11
tags: [programming]
---

Recently, my mind is going insane with trying to componetize everything that goes into it. Train cars, physical ads, shops, stairs, restrooms, and more. I'm not sure why exactly, but I think it's because I've been trying to write clean code that is reusable and typed strongly. The idea of typing everything and creating reusable code is something I have started to put effort in recently.

## Table of contents

## What is componentizing?

From what I understand, componetizing in programming is to make things that are used more than once to be reusable. For example, if you have a button that is used in multiple places, you would make a component for it. This component would be able to be used in multiple places and would have similar styling to keep consistent theme throughout an app or website. I think this idea can, and is probably applied in non-programming situations as well.

## Why componentize?

Think of a situation where a styled button is used in multiple places throughout an app, but you want to change the style to match a new theme. If you have to go through every single button and change the style, that would be a lot of work. If you had a component for the button, you would only have to change the style in one place. This is the main reason why I think componentizing is important. It makes it easier to change things in the future. On top of that, it is easier to see what is going on in the code. If you have a component for a button, you can see what is going on in the button component, and not have to worry about what is going on in the button itself.

## How to componentize?

Componetizing is a really simple process for what it offers. Just copy a "component" that is used in many places, give it a name, and save it somewhere accessible from anywhere in the app. In my opinion, [Astro](https://astro.build/) does this insanely well. Being able to create components of HTML code is fascinating, and the file that will be built is only the HTML that is used. This means that if you have a component that is used in multiple places, it will only be built once, and then used in the other places. This is a great way to save space and make things easier to read.

## Real world componentizing

Some real world examples of componentizing that I have been thinking about recently.

### Train cars

I was on a train today and I was thinking about how they can be componetized. I started by thinking about the basic body of a train car, and the props that are necessary for it to become a dynamic and usable component. I came up with the following (this is not all of the props, just the ones that I thought of first):

- these could be given default values

  - `color`: The color of the train car
  - `length`: The length of the train car
  - `width`: The width of the train car
  - `height`: The height of the train car
  - `doors`: The number of doors on the train car
  - `wheels`: The number of wheels on the train car

- these should be required
  - `seats`: The number of seats on the train car
  - `presense of a bathroom`: Whether or not the train car has a bathroom
  - `presense/direction of a driver's cabin`: Whether or not the train car has a driver's cabin
  - `presense of a baby stroller area`: Whether or not the train car has a baby stroller area

And, these could also be componetized, like the wheels, bathroom, and seats. This is a very basic example of how I think about componentizing things. I think about the basic parts of the thing, and then I think about the props that are necessary for it to be dynamic and usable.

### Stairs

This is an easy one, I think. The properties that could be given are:

- `height`: The height of the stairs
- `width`: The width of the stairs
- `length`: The length of the stairs
- `number of steps`: The number of steps in the stairs
- `presense of a handrail`: Whether or not the stairs have a handrail
- `presense of a ramp`: Whether or not the stairs have a ramp
- `color`: The color of the stairs
- `material`: The material of the stairs

## Conclusion

In all, componetizing is probably how the world works in its deepest form. Humans intentionally and unintentionally loves to componetize things everywhere and anywhere. I love to think about things this way because it is a great way to train my mind for programming and to think about every day things differently. I hope you enjoyed this post, and I hope you have a great day!
