
# MongoDB Aggregation

## 1. What is Aggregation?

Aggregation is used to process documents and calculate results, such as total, average, count, and grouping data.

**Example:** Total employees, average salary, or employees grouped by department.

## 2. Example Data

Suppose we have an `employees` collection:

```javascript
[
  { name: "Amit", department: "IT", salary: 30000 },
  { name: "Rahul", department: "IT", salary: 40000 },
  { name: "Priya", department: "HR", salary: 25000 }
]
```

## 3. Aggregation Example

### Find Total Salary by Department

```javascript
db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      totalSalary: { $sum: "$salary" }
    }
  }
]);
```

### Output

```javascript
[
  { _id: "IT", totalSalary: 70000 },
  { _id: "HR", totalSalary: 25000 }
]
```

**Explanation:**
- `aggregate()` runs the aggregation pipeline.
- `$group` groups documents by department.
- `_id: "$department"` specifies the field used for grouping.
- `$sum` adds the salaries in each group.

## 4. Important Aggregation Stages

### `$match` — Filter documents

```javascript
{ $match: { department: "IT" } }
```

Returns only employees from the IT department.

### `$group` — Group documents and calculate values

```javascript
{
  $group: {
    _id: "$department",
    totalEmployees: { $sum: 1 }
  }
}
```

Counts employees in each department.

### `$sort` — Sort results

```javascript
{ $sort: { salary: -1 } }
```

Sorts salary from highest to lowest.

### `$project` — Select fields

```javascript
{
  $project: {
    name: 1,
    salary: 1,
    _id: 0
  }
}
```

Returns only `name` and `salary`, hiding `_id`.

## 5. Difference Between find() and aggregate()

| `find()` | `aggregate()` |
|---|---|
| Retrieves matching documents. | Processes documents through pipeline stages. |
| Good for simple queries. | Good for grouping and calculations. |
| Example: Find IT employees. | Example: Calculate total salary by department. |

## 6. Interview Answer

MongoDB Aggregation is used to process documents and perform operations such as filtering, grouping, sorting, counting, and calculating totals. It uses a pipeline in which documents pass through stages like `$match`, `$group`, `$sort`, and `$project`.

**Remember:** Aggregation = Filter + Group + Calculate + Transform data.
