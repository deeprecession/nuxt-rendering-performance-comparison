<template>
	<article
		v-if="status ==='pending'"
		aria-busy="true"
	/>
	<article v-else-if="status ==='error'">
		{{ error }}
	</article>
	<article v-else>
		<table>
			<thead>
				<tr>
					<th
						v-for="column in tableData?.columns"
						:key="column"
					>
						{{ column }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="row in tableData?.rows"
					:key="row.join(',')"
				>
					<td
						v-for="cell in row"
						:key="cell"
					>
						{{ cell }}
					</td>
				</tr>
			</tbody>
		</table>
	</article>
</template>

<script lang="ts" setup>
const props = defineProps<{
	rowsNum?: number;
}>();

const tableParams = {
	rowsNum: props.rowsNum,
};

const { data: tableData, error, status } = await useFetch("/api/table", { lazy: true, query: tableParams });
</script>
