


# MongoDB Aggregation

## 1. What is Aggregation?

Aggregation is used to calculate or summarize data from a MongoDB collection.

For example:
- Count total employees.
- Calculate total salary.
- Find average salary.
- Group employees by department.

## 2. Example Data

Suppose we have an `employees` collection:

```javascript
[
  { name: "Amit", department: "IT", salary: 30000 },
  { name: "Rahul", department: "IT", salary: 40000 },
  { name: "Priya", department: "HR", salary: 25000 }
]
```

## 3. Example: Count Total Employees

```javascript
db.employees.aggregate([
  {
    $count: "totalEmployees"
  }
]);
```

Output:

```javascript
[
  { totalEmployees: 3 }
]
```

Here, `$count` counts the documents in the collection.

## 4. Example: Calculate Total Salary

```javascript
db.employees.aggregate([
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" }
    }
  }
]);
```

Output:

```javascript
[
  { _id: null, totalSalary: 95000 }
]
```

Here:
- `$group` groups documents together.
- `_id: null` means all employees belong to one group.
- `$sum: "$salary"` adds all salary values.

## 5. Example: Group Employees by Department

```javascript
db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      totalEmployees: { $sum: 1 }
    }
  }
]);
```

Output:

```javascript
[
  { _id: "IT", totalEmployees: 2 },
  { _id: "HR", totalEmployees: 1 }
]
```

Here:
- `_id: "$department"` groups employees by department.
- `$sum: 1` adds one for each employee.
- IT has 2 employees, and HR has 1.

## 6. Important Aggregation Operators

| Operator | Purpose |
|---|---|
| `$match` | Filters documents |
| `$group` | Groups documents |
| `$sum` | Calculates a sum or count |
| `$avg` | Calculates an average |
| `$sort` | Sorts documents |
| `$project` | Selects or transforms fields |
| `$count` | Counts documents |

## 7. What Is an Aggregation Pipeline?

An aggregation pipeline is a sequence of stages. Each stage processes the documents and passes its results to the next stage.

Example:

```javascript
db.employees.aggregate([
  { $match: { department: "IT" } },
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" }
    }
  }
]);
```

**Step 1:** `$match` selects IT employees.

**Step 2:** `$group` calculates their total salary.

Output:

```javascript
[
  { _id: null, totalSalary: 70000 }
]
```

## 8. Difference Between find() and aggregate()

| `find()` | `aggregate()` |
|---|---|
| Finds matching documents. | Processes documents through multiple stages. |
| Used for simple queries. | Used for calculations and grouping. |
| Example: Find IT employees. | Example: Calculate total IT salary. |

## 9. Interview Answer

MongoDB Aggregation is used to process and summarize collection data. It works through a pipeline of stages such as `$match`, `$group`, and `$sort` to filter documents, group records, and perform calculations.

**Remember:**
- `$match` = Filter
- `$group` = Group
- `$sum` = Add values
- `$avg` = Calculate average
- `$sort` = Sort
