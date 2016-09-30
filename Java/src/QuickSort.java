import java.util.Arrays;

public class QuickSort {

	public static int[] quickSort(int[] arr, int leftCursor, int rightCursor) {
		if (leftCursor < rightCursor) {
			int pivot = leftCursor + (int)(Math.floor((Math.random()) * (rightCursor - leftCursor + 1)));
			int breakpoint = partition(arr, leftCursor, rightCursor, pivot);
			quickSort(arr, leftCursor, breakpoint - 1);
			quickSort(arr, breakpoint + 1, rightCursor);
		}
		return arr;
	}
	
	public static int partition(int[] arr, int leftCursor, int rightCursor, int pivot) {
		int pivotValue = arr[pivot];
		arr[pivot] = arr[rightCursor];
		arr[rightCursor] = pivotValue;
		
		int storageMarker = leftCursor;
		
		for (int i = leftCursor; i < rightCursor; i++) {
			if (arr[i] < pivotValue) {
				int lesserValue = arr[i];
				arr[i] = arr[storageMarker];
				arr[storageMarker] = lesserValue;
				storageMarker += 1;
			}
		}
		
		int storageValue = arr[storageMarker];
		arr[storageMarker] = arr[rightCursor];
		arr[rightCursor] = storageValue;
		
		return storageMarker;
	}
	
	public static void main(String[] args) {
		int[] arr = {7, 4, 3, 78, 6, 45, 2, 4, 32, 10};
		System.out.println("Unsorted array:");
		System.out.println(Arrays.toString(arr));
		System.out.println("Sorted array:");
		System.out.println(Arrays.toString(quickSort(arr, 0, arr.length - 1)));
	}

}
