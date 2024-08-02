type Nullable<T> = T | null | undefined;
type Value = Nullable<string | number | boolean>;
type ObjectType<T = any, P extends PropertyKey = PropertyKey> = Record<P, T>;
type Mapping = ObjectType;
type Argument = Value | Mapping | Argument[];

function toValue(value: Argument): string {
  let res = ``;
  let y: Nullable<string>;

  if (typeof value === `string` || typeof value === `number`) {
    res += value;
  } else if (typeof value === `object`) {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        if (value[i]) {
          if ((y = toValue(value[i]))) {
            res && (res += ` `);
            res += y;
          }
        }
      }
    } else {
      for (const key in value) {
        if (value[key]) {
          res && (res += ` `);
          res += key;
        }
      }
    }
  }

  return res;
}

export function classnames(...args: Argument[]): string {
  let i = 0;
  let tmp: Nullable<Argument>;
  let x: Nullable<string>;
  let res = ``;

  while (i < args.length) {
    if ((tmp = args[i++])) {
      if ((x = toValue(tmp))) {
        res && (res += ` `);
        res += x;
      }
    }
  }

  return res;
}

export default classnames;
