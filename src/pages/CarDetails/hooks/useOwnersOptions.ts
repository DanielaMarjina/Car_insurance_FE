import { useState, useEffect } from "react";
import { getOwners } from "../../../api/owners/getOwners";
import type { SelectOption } from "../../../types/common";

export const useOwnersOptions = (ownerId: string, isViewMode:boolean) => {
    const [ownerOptions, setOwnerOptions] = useState<SelectOption[]>([]);

    useEffect(() => {
      if (isViewMode || ownerId) {
        return;
      }
    
      let isCurrentRequest = true;
    
      const fetchOwners = async () => {
        try {
          const response = await getOwners();
    
          if (!isCurrentRequest) {
            return;
          }
    
          setOwnerOptions(
      response.items.map((owner) => ({
        value: owner.id,
        label: owner.name,
      }))
    );
        } catch (error) {
          console.error(error);
    
          if (isCurrentRequest) {
            setOwnerOptions([]);
          }
        }
      };
    
      fetchOwners();
    
      return () => {
        isCurrentRequest = false;
      };
    }, [isViewMode, ownerId]);
    
    return { ownerOptions}
}