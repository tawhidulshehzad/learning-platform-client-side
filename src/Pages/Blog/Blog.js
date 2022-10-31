import React from "react";

const Blog = () => {
  return (
    <div className="bg-light p-3 rounded" >
      <h2>1. What is `cors`?</h2>
      <p>
        The Cross-Origin Resource Sharing (CORS) mechanism instructs the browser
        to grant permission for a web application running at one origin (domain)
        to access specific resources from a server at a different origin using
        extra HTTP headers. When a web application accesses a resource from a
        domain, protocol, or port other than its own origin, it sends a
        cross-origin HTTP request. A cross-origin request might look like this:
        In our project, the server and client are never combined. Client and
        server are currently in communication with one another. When both the
        server and the client are executing on the same host, communication is
        error-free.
      </p>
      <h2>
        2.Why are you using `firebase`? What other options do you have to
        implement authentication?
      </h2>
      <p>
        You can create top-notch apps with Firebase, expand your user base, and
        increase your income. Each feature functions properly on their own, but
        when combined, they perform much better.
        <br />
        You may use Firebase Authentication to let users log in to your app
        using one or more sign-in options, such as federated identity providers
        like Google Sign-in and Facebook Login as well as email address and
        password sign-in. This video walks you through adding an email address
        and password sign-in to your app to get you started with Firebase
        Authentication.
      </p>
      <h2>3.How does the private route work?</h2>
      <p>
        React Router's Private Routes, also known as Protected Routes, demand
        that a user has permission to access the route (read: page). Therefore,
        a user cannot visit a page if they are not authorized to do so. The most
        prevalent illustration is authentication in a React application, where a
        user can only access the protected pages if they are permitted (which
        means in this case being authenticated). However, authorization goes
        further than authentication. A user may, for instance, have
        responsibilities and permissions that grant access to particular
        portions of the program.
      </p>
      <h2>4.What is Node? How does Node work?</h2>
      <p>
        An open-source, cross-platform runtime environment and library for
        JavaScript is called Node.js, and it is used to run web applications
        outside of the client's browser. It was created in 2009 by Ryan Dahl,
        and version 15.14 of it was made available in April of 2021. Developers
        employ Node.
        <br />
        Node is entirely based on events. The server essentially consists of one
        thread processing each event one at a time. One type of event is a fresh
        request being received. When there is a blocking IO action, the server
        begins processing it and instead of waiting for it to finish, it
        registers a callback function.
      </p>
    </div>
  );
};

export default Blog;
