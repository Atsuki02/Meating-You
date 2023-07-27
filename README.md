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

### Redux
[Redux](https://redux.js.org/) was employed to manage the application's state across multiple components. Due to the app's structure, components required access to state not only within themselves but also from sibling or child components. Utilizing Redux centralizes state management, making it accessible throughout the entire application.

### Supabase
[Supabase](https://supabase.com/) was integrated into the app to store reservation data and enable user-specific features like login/logout functionality. The app grants users access to their booking details, including reservation date, time, and table information on their personalized booking page.

### React Query
[React Query](https://tanstack.com/) (formerly known as TanStack Query) played a vital role in handling data-fetching between the client and the supabase server. Its simplified API allowed for seamless interactions with the server while providing features like data caching for improved performance and data synchronization across multiple users.

## Additional Libraries/Frameworks

### tailwind calendar
The [tailwind calendar](https://react-tailwindcss-datepicker.vercel.app/) was integrated to provide users with an intuitive date picker for selecting their reservation date. It offered customization options, enabling easy implementation without the need for custom coding.

### Toast
[Toast](https://react-hot-toast.com/) was employed to provide users with timely notifications on various interactions, such as login, sign-up, form validation, and booking status. Its straightforward integration and smooth design complemented the overall user experience.

## Overcoming Limited Accessibility

To achieve limited accessibility to the history page, I implemented a component called `<ProtectedRoute>`, which acts as a wrapper for the booking history component. This custom `<ProtectedRoute>` component checks whether users are authenticated based on data retrieved from supabase. If users are authenticated, the component renders its children, granting access to the booking history page. On the other hand, if users are not authenticated, the component takes appropriate measures to ensure a smooth user experience, such as redirecting them to a login or sign-up page.


## Scrolling to the Top for Improved Navigation

One of the challenges faced in the React app was that the page was not automatically scrolled to the top after route changes. This could potentially lead to a disjointed user experience, especially when navigating through multiple pages.

To tackle this issue, I employed the `useEffect` hook in React. By leveraging `useEffect`, I was able to detect route changes and trigger a manual scroll to the top of the page. This seamless scrolling behavior ensures that users are presented with a consistent and cohesive browsing experience, even when transitioning between different pages within the app.

# Issue 

## React Query Devtools

While attempting to integrate the React Query devtools into the application, I encountered an error indicating a missing "./build/lib/devtools" specifier in the "@tanstack/react-query-devtools" package. Despite installing the package using the "npm i @tanstack/react-query-devtools" command, the issue persists.

## Enhancing User Experience: Access to Booking History

In order to enhance the user experience, I have a vision to grant access to the booking history page for all users, even those who are not logged in. However, I intend to restrict the visibility of reservations for non-logged-in users to only the most recent booking they have made. This way, they can still view the details of their latest reservation.
As of the current app structure, the booking history page exclusively displays reservations linked to the corresponding user ID. Consequently, reservations with a "null" user ID (assigned to non-logged-in users) cannot be associated with any specific user, rendering them invisible in the history page.
To address this, I am exploring various strategies to modify the app's architecture and logic. By allowing reservations to be viewable by non-logged-in users based on their most recent booking, I aim to provide a more inclusive and user-friendly experience.
