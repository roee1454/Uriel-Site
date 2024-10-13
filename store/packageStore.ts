'use client'
import { PackageDeal } from '@/screens/options';
import {create} from 'zustand';

interface PackageStore {
  selectedPackage: PackageDeal | null;
  setSelectedPackage: (packageDeal: PackageDeal) => void;
}

export const usePackageStore = create<PackageStore>((set) => ({
  selectedPackage: null,
  setSelectedPackage: (packageDeal: PackageDeal) => set({ selectedPackage: packageDeal }),
}));
