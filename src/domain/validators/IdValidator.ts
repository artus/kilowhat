import { chainable } from "valivalue";

export const idValidator = (id: string) => chainable(true)
  .objects.validateNotNullOrUndefined(id, 'ID')
  .strings.validateNotEmpty(id, 'ID');