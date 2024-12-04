# React Native FlatList Performance Issue

This repository demonstrates a performance issue in React Native's `FlatList` component when dealing with large datasets. The `renderItem` function is called unnecessarily for items not currently visible on the screen, leading to performance degradation and potential crashes.

## Problem

The core problem lies in the way `FlatList` handles rendering. Even when items are scrolled off-screen, `renderItem` may continue to be invoked, causing a significant performance bottleneck. This is particularly noticeable with very large datasets.

## Solution

The provided solution addresses this by utilizing React Native's `useMemo` hook and optimizing how data is processed and rendered by the `FlatList`. By leveraging `useMemo`, expensive calculations or data transformations occur only when necessary, enhancing performance.

## Setup

1.  Clone this repository.
2.  `cd` into the directory.
3.  `npm install`
4.  `npx react-native run-android` or `npx react-native run-ios`

## Files

*   `FlatListBug.js`: Demonstrates the performance issue.
*   `FlatListBugSolution.js`: Provides a solution using `useMemo` for performance optimization.