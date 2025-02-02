class Apifeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
    this.queryObj = { ...this.queryStr };
  }
  excludes() {
    const exculdeFields = ["page", "sort", "limit", "fields", "search"];
    exculdeFields.forEach((data) => {
      delete this.queryObj[data];
    });

    return this;
  }
  filter() {
    let queryStr = JSON.stringify(this.queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  search() {
    if (!this.queryStr.search) {
      return this;
    }

    const searchTerm = this.queryStr.search.trim().replace(/%20/g, " ");
    const searchFields = [
      "name",
      "description",
      "brand",
      "color",
      "length",
      "fabric",
      "fit",
      "neck",
      "sleeve",
    ];
    const regexPattern = new RegExp(searchTerm, "i"); // Case-insensitive regex pattern

    const orConditions = searchFields.map((field) => ({
      [field]: { $regex: regexPattern },
    }));

    this.query.find({ $or: orConditions });

    return this;
  }

  limitFields() {
    if (this.queryStr.fields) {
      const fields = this.queryStr.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    const page = this.queryStr.page * 1 || 1;
    const limit = this.queryStr.limit * 1 || 20;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = Apifeatures;
