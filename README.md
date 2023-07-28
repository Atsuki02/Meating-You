# Meatying You

Link:
https://meating-you.netlify.app/home

## Introduction

Meating You is a web application that enables users to conveniently make restaurant reservations from the comfort of their home. With this app, users can easily book or cancel reservations using their smartphones, eliminating the need to make a phone call to the restaurant.

## Motivation

The motivation behind creating Meating You was to provide users with a user-friendly platform for making restaurant reservations. The app aims to offer a seamless experience, allowing users to manage their bookings efficiently. Additionally, this project served as an opportunity for me to apply and demonstrate their recent learnings in React Router, Redux, React Query, and supabase technologies.

## Technologies Used

### React Router
[React Router](https://reactrouter.com/en/main) was chosen for this project to facilitate smooth page transitions and enable the implementation of multiple pages, a crucial feature for a reservation app.

### Redux toolkit
[Redux toolkit](https://redux-toolkit.js.org/) was employed to manage the application's state across multiple components. Due to the app's structure, components required access to state not only within themselves but also from sibling or child components. Utilizing Redux centralizes state management, making it accessible throughout the entire application.

### Supabase
[Supabase](https://supabase.com/) was integrated into the app to store reservation data and enable user-specific features like login/logout functionality. The app grants users access to their booking details, including reservation date, time, and table information on their personalized booking page.

### React Query
[React Query](https://tanstack.com/) (formerly known as TanStack Query) played a vital role in handling data-fetching between the client and the supabase server. Its simplified API allowed for seamless interactions with the server while providing features like data caching for improved performance and data synchronization across multiple users.

## Additional Libraries/Frameworks

### tailwind calendar
The [tailwind calendar](https://react-tailwindcss-datepicker.vercel.app/) was integrated to provide users with an intuitive date picker for selecting their reservation date. It offered customization options, enabling easy implementation without the need for custom coding.

### Toast
[Toast](https://react-hot-toast.com/) was employed to provide users with timely notifications on various interactions, such as login, sign-up, form validation, and booking status. Its straightforward integration and smooth design complemented the overall user experience.

## Scrolling to the Top for Improved Navigation

One of the challenges faced in the React app was that the page was not automatically scrolled to the top after route changes. This could potentially lead to a disjointed user experience, especially when navigating through multiple pages.

To tackle this issue, I employed the `useEffect` hook in React. By leveraging `useEffect`, I was able to detect route changes and trigger a manual scroll to the top of the page. This seamless scrolling behavior ensures that users are presented with a consistent and cohesive browsing experience, even when transitioning between different pages within the app.

## Enhancing User Experience: Access to Booking History

To improve user experience, I addressed the issue of limited accessibility to the booking history page. Originally, the page was restricted to logged-in users only. However, I wanted to provide access to all users, regardless of their authentication status.

To achieve this, I implemented a mechanism where users who are not logged in are assigned a one-off userId when they visit the confirmation page. On the other hand, logged-in users receive their userId upon logging in. This approach ensures that authenticated users can keep a record of their bookings, while non-logged in users can still view their bookings until they leave the browser.

By adopting this approach, I have enabled all users to access and interact with the booking history page, offering a seamless experience regardless of their authentication status.
